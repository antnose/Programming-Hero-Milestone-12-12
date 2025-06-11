import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w1/2 lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                {...register("name", { required: true })}
                type="name"
                className="input"
                placeholder="Name"
              />
              {errors.name && <span>This field is required</span>}

              <label className="label">Email</label>
              <input
                name="email"
                {...register("email", { required: true })}
                type="email"
                className="input"
                placeholder="Email"
              />
              {errors.email && <span>This field is required</span>}

              <label className="label">Password</label>
              <input
                name="password"
                {...register("password", { required: true })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password && <span>This field is required</span>}

              <input
                type="submit"
                value={"SignUp"}
                className="btn btn-neutral mt-4"
              />
            </fieldset>
          </form>
          <Link to={"/login"}>Already have an account</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
