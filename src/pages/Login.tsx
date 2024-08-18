import { Button, Row } from "antd";
import { FieldValues} from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/AuthApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser, Tuser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utils/VerifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("logging in...");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as Tuser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("logged in", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Row justify='center' align='middle' style={{height: '100vh'}}>

    <PhForm onSubmit={onSubmit}>
      <div>
        <div>
          
          <PhInput type="text" name="password" label='ID:'/>
        </div>
        <div>
         
          <PhInput type="Text" name="password" label='Password'/>
        </div>
      </div>
      <Button htmlType="submit">Login</Button>
    </PhForm>
    </Row>
  );
};

export default Login;
