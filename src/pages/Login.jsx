
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
    return (
        <div className="d-flex flex-column flex-md-row vh-100 bg-white">
            <div className="w-100 w-md-50 bg-white text-black p-4">
                <div className="col-md-12 p-5 ">
                            <div className="w-lg-500px p-10">
                                <div className="col-md-12 p-5 ">
                                <h3 className="text-center">Login</h3>
                                
                                
                                    {/* Formulario de login */}
                                    <form>
                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Contraseña" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Contraseña</label>
                                            <input type="password" className="form-control" placeholder="Contraseña" />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <input type="checkbox" /> Remember me
                                            </div>
                                            <a href="#" className="text-decoration-none">Forgot Password?</a>
                                        </div>
                                        <button className="btn btn-primary w-100 mt-3">Sign In</button>
                                    </form>
                                    <p className="text-center mt-3">Not a Member yet? <a href="#">Sign up</a></p>
                                </div>
                            </div>
                </div>
            </div>

            
            
            <div className="w-100 w-md-50 bg-secondary d-flex align-items-center justify-content-center">
  <img 
    src="Resources/images/pizza_login.jpg"
    className="img-fluid rounded"
    alt="Imagen de ejemplo"
  />
</div>




        </div>
    );
};



export default Login;
