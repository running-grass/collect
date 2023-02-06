'use client';

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string,
  password: string,
};
export default () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return <>
    <section className="mt-20 w-full flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-1 ">
        <input type="text" defaultValue="demo" {...register("username", { required: true})} />

        {/* include validation with required or other standard HTML validation rules */}
        <input type="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>密码是必须的</span>}

        <button type="submit">登录</button>
      </form>
    </section>
  </>
}