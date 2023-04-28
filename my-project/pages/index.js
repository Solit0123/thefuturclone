import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='container-fluid bg-black text-white '>
    <div className="container mx-auto flex flex-row justify-between py-12  items-center">
        
          <div className=" w-28">
          <svg width="100%" height="100%" viewBox="0 0 281 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M11.7513 11.2656H0.138611V54.6933H11.7513V31.0574H18.4577V21.2919H11.7513V11.2656Z" fill="currentColor"></path>
<path d="M45.308 20.1852C40.6873 20.1852 37.3647 21.8799 34.6327 25.5243H34.5024V11.2656H22.6595V54.6933H34.5024V37.5696C34.5024 33.6645 35.9973 29.6263 40.6873 29.6263C45.4384 29.6263 46.0236 33.6645 46.0236 37.5696V54.6933H57.8831V34.2497C57.8831 25.785 53.7728 20.1852 45.308 20.1852Z" fill="currentColor"></path>
<path d="M80.0907 20.1853C69.2185 20.1853 61.5997 26.8917 61.5997 38.0246C61.5997 49.5485 69.8675 55.8 80.9366 55.8C84.7779 55.8 88.5555 54.8875 91.6146 52.9988C93.1979 52.0573 94.5739 50.8045 95.6593 49.3162C96.7448 47.828 97.5172 46.1351 97.9299 44.3398H86.5363C85.2328 46.5587 83.4106 47.3907 80.8728 47.3907C75.9887 47.3907 73.4509 44.7864 73.4509 39.9688H98.3765V38.7401C98.3765 27.3465 91.6784 20.1853 80.0907 20.1853ZM73.645 33.1432C74.3606 29.6929 77.2257 27.8735 80.6759 27.8735C83.8654 27.8735 86.797 29.9564 87.3823 33.1432H73.645Z" fill="currentColor"></path>
<path d="M109.595 5.34146C106.339 9.05242 106.209 12.4389 106.209 17.0596V21.2947H102.049V31.0575H106.209V54.6934H118.068V31.0575H126.336V21.2947H118.068V15.8891C118.068 12.1116 119.109 10.2894 122.17 10.2894C123.732 10.2894 124.969 10.8108 126.331 11.3988V1.17564C124.762 0.367803 123.017 -0.0354595 121.252 0.00244551C119.037 -0.0127648 116.846 0.457338 114.832 1.37971C112.818 2.30209 111.031 3.65436 109.595 5.34146V5.34146Z" fill="currentColor"></path>
<path d="M154.421 39.1312C154.421 43.3635 153.378 46.3589 148.497 46.3589C143.615 46.3589 142.572 43.3635 142.572 39.1312V21.2947H130.721V41.4137C130.721 52.4163 138.47 55.8027 148.497 55.8027C158.523 55.8027 166.269 52.4163 166.269 41.4137V21.2947H154.421V39.1312Z" fill="currentColor"></path>
<path d="M186.197 11H174.349V21.0263H170.507V30.7918H174.349V54.4277H186.197V30.7918H192.903V21.0263H186.197V11Z" fill="currentColor"></path>
<path d="M220.741 39.1312C220.741 43.3635 219.701 46.3589 214.817 46.3589C209.933 46.3589 208.893 43.3635 208.893 39.1312V21.2947H197.044V41.4137C197.044 52.4163 204.791 55.8027 214.817 55.8027C224.843 55.8027 232.592 52.4163 232.592 41.4137V21.2947H220.741V39.1312Z" fill="currentColor"></path>
<path d="M259.795 20.837C255.172 20.837 251.266 22.6592 248.978 26.7613H248.848V21.2947H237.002V54.6933H248.851V41.2168C248.851 35.4867 250.479 31.124 257.055 31.124C258.877 31.124 260.441 31.3181 262.069 32.2334V20.837H259.795Z" fill="currentColor"></path>
<path d="M266.139 15.2677H268.451V21H269.974V15.2677H272.258V14H266.139V15.2677ZM277.673 21L279.506 16.3701V21H280.916V14H279.111L277.166 18.9606L275.22 14H273.415V21H274.825V16.3701L276.658 21H277.673Z" fill="currentColor"></path>
</g>
<defs>
<clipPath id="clip0">
<rect width="944.39" height="201.18" fill="currentColor"></rect>
</clipPath>
</defs>
          </svg>
          </div>
          
          <div className=" list-none flex flex-row gap-14 text-[19px]">
            <li className='hover:underline'>Courses & Tools</li>
            <li className='hover:underline'>Mission</li>
            <li className='hover:underline'>Library</li>
            <li className='hover:underline'>Events</li>
            <li className='hover:underline'>Business Bootcamp</li>
          </div>

          <div className="flex flex-row">
              <div className="py-2 px-6 hover:bg-[#141414] transition duration-100 rounded-lg ease-in-out">Go to Dashboard</div>
              <div className="py-2 px-6 hover:bg-[#141414] transition duration-100 rounded-lg ease-in-out">Sign In</div>
              <div className="">dropdown</div>
          </div>
        
    </div>
      
   </div>
  )
}
