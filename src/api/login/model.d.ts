/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-20 13:57:49
 * @LastEditTime: 2022-08-20 15:17:42
 */
declare namespace API {
  /** 登录参数 */
  type LoginParams = {

    password: string;
    username: string;

  };

  /** 登录成功结果 */
  type LoginResult = {
    token: string;
  };

  /** 获取验证码参数 */
  type CaptchaParams = {
    width?: number;
    height?: number;
  };

  /** 获取验证码结果 */
  type CaptchaResult = {
    img: string;
    id: string;
  };
}