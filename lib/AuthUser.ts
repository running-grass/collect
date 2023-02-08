/**
 * 登录用户的session中保存的数据
 */
export type AuthUser = {
  id: string
  name?: string
  email?: string
  image?: string
}

export type AuthUserContext = {
  user?: AuthUser
}
