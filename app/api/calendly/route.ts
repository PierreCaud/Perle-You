// app/api/calendly/route.ts

interface CalendlyEvent {
  name: string;
  description: string | null;
  scheduling_url: string;
  duration: number;
  pooling_type: string | null;
  color?: string | null;
  slug?: string | null;
  uri?: string | null;
  position?: number | null;
  type?: string | null;
}

interface CalendlyAPIResponse {
  collection: {
    name: string;
    description_html: string | null;
    scheduling_url: string;
    duration: number;
    pooling_type: string | null;
  }[];
  pagination?: {
    next_page?: string | null;
  };
}

export async function GET() {
  const token = process.env.CALENDLY_TOKEN;
  const orgUri = process.env.CALENDLY_ORG_URI;
  const userUri = process.env.CALENDLY_USER_URI;

  if (!token) {
    return Response.json(
      { error: "CALENDLY_TOKEN is missing from environment variables" },
      { status: 500 }
    );
  }

  // Utilise organization en priorité, sinon user
  const queryParam = orgUri
    ? `organization=${encodeURIComponent(orgUri)}`
    : userUri
    ? `user=${encodeURIComponent(userUri)}`
    : null;

  if (!queryParam) {
    return Response.json(
      {
        error:
          "Neither CALENDLY_ORG_URI nor CALENDLY_USER_URI is defined in environment variables.",
      },
      { status: 500 }
    );
  }

  try {
    const baseUrl = `https://api.calendly.com/event_types?${queryParam}`;

    const events: CalendlyEvent[] = [];
    let nextUrl: string | null = baseUrl;

    while (nextUrl) {
      const response = await fetch(nextUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      if (!response.ok) {
        return Response.json(
          {
            error: "Calendly API returned an error",
            status: response.status,
          },
          { status: response.status }
        );
      }
      const data = (await response.json()) as CalendlyAPIResponse;

      if (Array.isArray(data.collection)) {
        for (const ev of data.collection) {
          events.push({
            name: ev.name,
            description: ev.description_html,
            scheduling_url: ev.scheduling_url,
            duration: ev.duration,
            pooling_type: ev.pooling_type,
            color: (ev as any).color ?? null,
            slug: (ev as any).slug ?? null,
            uri: (ev as any).uri ?? null,
            position: (ev as any).position ?? null,
            type: (ev as any).type ?? null,
          });
        }
      }

      nextUrl = data.pagination && data.pagination.next_page ? data.pagination.next_page : null;
    }

    return Response.json(events);
  } catch (err: unknown) {
    return Response.json(
      { error: "Unexpected server error", details: String(err) },
      { status: 500 }
    );
  }
}
