export default function FooterSection() {
  return (
    <footer className="bg-gray-100 py-16 px-6 lg:px-12">
      <div className=" border-b-1 border-b-[#D9D9D9]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div>
            <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-normal text-gray-800 tracking-wide leading-tight">
              IDEAS COME TO LIFE<br />
              WITH CONVERSATION.
            </h2>
            <a 
              href="mailto:info@rayfitout.com" 
              className="text-[24px] md:text-[40px] text-black font-light hover:text-black transition-colors duration-200"
            >
              INFO@RAYFITOUT.COM
            </a>
          </div>
          
          <button className="mt-8 lg:mt-0 group relative inline-flex items-center justify-center px-8 py-4 border-2 border-gray-800 bg-transparent text-gray-800 font-normal tracking-wider hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            DROP AN INQUIRY
          </button>
        </div>
    </div>
    <div>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <h3 className="text-sm font-medium text-gray-800 mb-8 tracking-wider">OFFICE</h3>
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-3 tracking-wider">DUBAI, UAE</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>23, 31 35 AL QUSAIS 5</p>
                <p>+971 800 799 63</p>
              </div>
            </div>
        
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-3 tracking-wider">RIYADH, SAUDI ARABIA</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>LEVEL 6, GATE D, AL</p>
                <p>AKARIA PLAZA, RIYADH</p>
                <p>SAUDI ARABIA</p>
                <p>+ 966 800 891 4050</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-3 tracking-wider">NAIROBI, KENYA</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>OFFICE 250A, BRITAM</p>
                <p>TOWER, HOSPITAL HILL</p>
                <p>ROAD, UPPER HILL, KENYA</p>
                <p>+254 676 949728</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Links */}
        <div className="mb-16">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <h3 className="text-[16px] text-[#000000] hover:text-[#000000] mb-8 tracking-wider">BUSINESS</h3>

            <div>
              <h4 className="text-[16px] text-[#000000] hover:text-[#000000] mb-3 tracking-wider">INQUIRIES</h4>
              <a 
                href="mailto:info@rayfitout.com" 
                className="text-[16px] text-[#000000] font-light hover:text-[#000000]text-[16px] text-[#000000] hover:text-[#000000] transition-colors duration-200 underline"
              >
                INFO@RAYFITOUT.COM
              </a>
            </div>
            
            <div>
              <h4 className="text-[16px] text-[#000000] hover:text-[#000000]text-sm font-medium text-gray-800 mb-3 tracking-wider">CAREER</h4>
              <a 
                href="mailto:hr@rayfitout.com" 
                className="text-[16px] text-[#000000] font-light hover:text-[#000000] transition-colors duration-200 underline"
              >
                HR@RAYFITOUT.COM
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-3 tracking-wider">SUPPLIERS</h4>
              <a 
                href="mailto:procurement@rayfitout.com" 
                className="text-[16px] text-[#000000] font-light hover:text-[#000000] transition-colors duration-200 underline"
              >
                PROCUREMENT@RAYFITOUT.COM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="/privacy-policy" 
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                PRIVACY POLICY
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                YOUTUBE
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                PINTEREST
              </a>
            </div>
            
            <p className="text-sm text-gray-600">
              © 2025 RAYFITOUT
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}