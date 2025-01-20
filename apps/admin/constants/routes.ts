const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/questions/${id}`,
  TAG: (id: string) => `/tags/${id}`,
}

export default ROUTES
