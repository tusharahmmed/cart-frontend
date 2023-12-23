import styles from "@/styles/login/login.module.scss";
import Form from "../form/Form";
import FormInput from "../form/FormInput";

import {yupResolver} from "@hookform/resolvers/yup";
import {message} from "antd";
import {useUserSignupMutation} from "@/rtk/features/api/authApi";
import {useRouter} from "next/navigation";
import {registerRequestSchema} from "@/schemas/register_request";
import {storeUserInfo} from "@/services/auth.service";

const Register = () => {
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    // console.log(data);

    message.loading("registering.....");
    try {
      const res = await userSignup({...data}).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/");
        message.success("sign up successfully!");
      }
      storeUserInfo({accessToken: res?.accessToken});
      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.data?.message);
    }
  };

  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.sectionTitle}>
        <h2>Register</h2>
      </div>
      <div className={styles.formWraper}>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(registerRequestSchema)}>
          <div className={styles.inputWraper}>
            <FormInput type="text" name="fullName" label="Full Name" />
          </div>
          <div className={styles.inputWraper}>
            <FormInput type="email" name="email" label="Email" />
          </div>
          <div className={styles.inputWraper}>
            <FormInput type="password" name="password" label="Password" />
          </div>

          <div className={styles.submit}>
            <button type="submit">Register</button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Register;
