export const onRequest = async (context: any, next: Function) => {
  const { request, session } = context;
  const isLoggedIn = await session.get("loggedIn");
  const url = new URL(request.url);

  if (url.pathname.startsWith("/demo-access")) {
    return isLoggedIn ? context.redirect("/") : next();
  } else {
    return isLoggedIn ? next() : context.redirect("/demo-access?error=loginneeded");
  }
};
