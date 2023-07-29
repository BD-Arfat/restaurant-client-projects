const Footer = () => {
    return (
        <footer>
            <div className="footer  p-10 bg-base-200 text-base-content">
                <div>
                    <img className="w-28 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjMTKkT36r1yN7ngOPYHXSTPm_1NN6Nb3tQ&usqp=CAU" alt="" />
                    <p>Hungry Restaurant.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-black text-white ">
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;