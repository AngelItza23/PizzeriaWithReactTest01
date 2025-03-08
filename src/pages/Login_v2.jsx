
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
    return (
        <div className="d-flex flex-column flex-md-row vh-100 imagen-pizzeria-background">
            {/* contenedor de formualrio  */}
            <div className="w-100 w-md-50  text-black p-2 ">
                <div className="col-md-12 p-5 ">
                    <div className="w-lg-500px p-10">
                        <div className="col-md-12 p-5">
                                <div className="d-flex flex-center flex-column flex-lg-row-fluid alineacion-total">
                                
                                    <div className="w-lg-500px p-10  login-container2">
                                        <h3 className="text-center">Login</h3>
                                            {/* Formulario de login */}
                                        <form>
                                            <div className="mb-3">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="mb-3">
                                                    <label>Contraseña</label>
                                                    <input type="password" className="form-control" placeholder="Contraseña" />
                                            </div>
                                                {/* <div className="d-flex justify-content-between">*/}
                                                    {/*<div>*/}
                                                    {/*<input type="checkbox" /> Remember me*/}
                                                    {/*</div>*/}
                                                    {/*<a href="#" className="text-decoration-none">Forgot Password?</a>*/}
                                                {/*</div>*/}
                                            <button className="btn btn-primary w-100 mt-3">Entrar</button>
                                        </form>
                                    </div>
                                </div>
                            {/* <p className="text-center mt-3">Not a Member yet? <a href="#">Sign up</a></p>*/}
                        </div>
                    </div>
                </div>
            </div>

            {/* contenedor de imagen  */}
            <div className="w-100 w-md-50  d-flex align-items-center justify-content-center imagen-logo-pizzeria2 logo-container2">
            <div className=""></div>
            </div>
        </div>
    );
};



export default Login;
