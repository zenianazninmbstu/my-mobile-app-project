
import logo from "../logo-text.png";

const footer = () => {
    return (
        <div>



          {/* Brand */}
          
          <div className="lg:col-span-2">

            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
              className="w-24 h-24 object-contain"
              />

             
            </div>

            <p className="text-gray-500 text-sm leading-6 mt-4 max-w-sm">
              Build smarter projects with the right technologies.
              Explore, compare and create your perfect development stack.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-5">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-black"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-black"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-black"
              >
                LinkedIn
              </a>

            </div>

          </div>


          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-black">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">
              Legal
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-black">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black">
                  Terms
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black">
                  License
                </a>
              </li>
            </ul>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-sm text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-500">
            <a href="#" className="hover:text-black">
              Privacy
            </a>

            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );



        </div>
    );
};

export default footer;