const url = new URL(window.location.href);

export const noCache = url.searchParams.has("no-cache");
