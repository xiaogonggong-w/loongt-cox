
  // import { theme } from 'antd'; 
  import type { CSSProperties } from 'react';
  import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserStore } from '@/store/user';
import { useShallow } from 'zustand/shallow';
  type LoginType = 'phone' | 'account';
  
  export default function Login() {
    // const { token } = theme.useToken();
    const [loginType, setLoginType] = useState<LoginType>('account');
    // const setUserInfo = useUserStore(useShallow(state => state.setUserInfo));
    // const navigate = useNavigate();
    // const iconStyles: CSSProperties = {
    //   marginInlineStart: '16px',
    //   color: setAlpha(token.colorTextBase, 0.2),
    //   fontSize: '24px',
    //   verticalAlign: 'middle',
    //   cursor: 'pointer',
    // };

    return <>
    </>
  
    // return (
      // <ProConfigProvider hashed={false}>
      //   <div className='flex-center' style={{ backgroundColor: token.colorBgContainer, width: '100%', height: '100%' }}>
      //     <LoginForm
      //       // logo="https://github.githubassets.com/favicons/favicon.png"
      //       title="LoongCoX"
      //       subTitle="最好的cox系统，没有之一"
      //       containerStyle={{
      //         height:"auto"
      //       }}
      //       onFinish={async (values) => {
      //         console.log(values,'1');
      //         setUserInfo({
      //           name: values.username,
      //           avatar: '',
      //         })
      //         navigate('/')
      //       }}
           
      //     >
      //       {/* <Tabs
      //         centered
      //         activeKey={loginType}
      //         onChange={(activeKey) => setLoginType(activeKey as LoginType)}
      //       >
      //         <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
      //         <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
      //       </Tabs> */}
      //       {loginType === 'account' && (
      //         <>
      //           <ProFormText
      //             name="username"
      //             fieldProps={{
      //               size: 'large',
      //               prefix: <UserOutlined className={'prefixIcon'} />,
      //             }}
      //             placeholder={'用户名: admin or user'}
      //             rules={[
      //               {
      //                 required: true,
      //                 message: '请输入用户名!',
      //               },
      //             ]}
      //           />
      //           <ProFormText.Password
      //             name="password"
      //             fieldProps={{
      //               size: 'large',
      //               prefix: <LockOutlined className={'prefixIcon'} />,
      //               strengthText:
      //                 'Password should contain numbers, letters and special characters, at least 8 characters long.',
      //               statusRender: (value) => {
      //                 const getStatus = () => {
      //                   if (value && value.length > 12) {
      //                     return 'ok';
      //                   }
      //                   if (value && value.length > 6) {
      //                     return 'pass';
      //                   }
      //                   return 'poor';
      //                 };
      //                 const status = getStatus();
      //                 if (status === 'pass') {
      //                   return (
      //                     <div style={{ color: token.colorWarning }}>
      //                       强度：中
      //                     </div>
      //                   );
      //                 }
      //                 if (status === 'ok') {
      //                   return (
      //                     <div style={{ color: token.colorSuccess }}>
      //                       强度：强
      //                     </div>
      //                   );
      //                 }
      //                 return (
      //                   <div style={{ color: token.colorError }}>强度：弱</div>
      //                 );
      //               },
      //             }}
      //             placeholder={'密码: ant.design'}
      //             rules={[
      //               {
      //                 required: true,
      //                 message: '请输入密码！',
      //               },
      //             ]}
      //           />
      //         </>
      //       )}
      //       {/* {loginType === 'phone' && (
      //         <>
      //           <ProFormText
      //             fieldProps={{
      //               size: 'large',
      //               prefix: <MobileOutlined className={'prefixIcon'} />,
      //             }}
      //             name="mobile"
      //             placeholder={'手机号'}
      //             rules={[
      //               {
      //                 required: true,
      //                 message: '请输入手机号！',
      //               },
      //               {
      //                 pattern: /^1\d{10}$/,
      //                 message: '手机号格式错误！',
      //               },
      //             ]}
      //           />
      //           <ProFormCaptcha
      //             fieldProps={{
      //               size: 'large',
      //               prefix: <LockOutlined className={'prefixIcon'} />,
      //             }}
      //             captchaProps={{
      //               size: 'large',
      //             }}
      //             placeholder={'请输入验证码'}
      //             captchaTextRender={(timing, count) => {
      //               if (timing) {
      //                 return `${count} ${'获取验证码'}`;
      //               }
      //               return '获取验证码';
      //             }}
      //             name="captcha"
      //             rules={[
      //               {
      //                 required: true,
      //                 message: '请输入验证码！',
      //               },
      //             ]}
      //             onGetCaptcha={async () => {
      //               message.success('获取验证码成功！验证码为：1234');
      //             }}
      //           />
      //         </>
      //       )} */}
      //       <div
      //         style={{
      //           marginBlockEnd: 24,
      //         }}
      //       >
      //         <ProFormCheckbox noStyle name="autoLogin">
      //           自动登录
      //         </ProFormCheckbox>
      //         <a
      //           style={{
      //             float: 'right',
      //           }}
      //         >
      //           忘记密码
      //         </a>
      //       </div>
      //     </LoginForm>
      //   </div>
      // </ProConfigProvider>
    // );
  };