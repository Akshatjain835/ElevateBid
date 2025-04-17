import React from 'react'
import { Container, CustomNavLinkList } from './Design';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
          <header>
            <Container>

              <nav className="p-4 flex justify-between items-center relative">
                <div className="flex items-center gap-14">

                  <div>
                    {isHomePage && !isScrolled ? (
                      <img src="../images/common/header-logo.png" alt="ElevateBid" className="h-11" />
                    ) : (
                      <img src="../images/common/header-logo2.png" alt="Elevate bid" className="h-11" />
                    )}
                  </div>

                  <div className="hidden lg:flex items-center justify-between gap-8">
                    {menulists.map((list) => (
                      <li key={list.id} className="capitalize list-none">
                        <CustomNavLinkList href={list.path} >
                          {list.link}
                        </CustomNavLinkList>
                      </li>
                    ))}
                  </div>
                  
                </div>

                <div className="flex items-center gap-8 icons">

                  <div className="hidden lg:flex lg:items-center lg:gap-8">
                    <IoSearchOutline size={23}  />
                    {role === "buyer" && (
                      <CustomNavLink href="/seller/login" >
                        Become a Seller
                      </CustomNavLink>
                    )}

                    <CustomNavLink href="/login">
                      Sign in
                    </CustomNavLink>

                    <CustomNavLink href="/register" >
                      Join
                    </CustomNavLink>

                    <CustomNavLink href="/dashboard">
                      <ProfileCard>
                        <img src={User1} alt="" className="w-full h-full object-cover" />
                      </ProfileCard>
                    </CustomNavLink>

                  </div>

                
                </div>
    
                
              </nav>
            </Container>
          </header>
        </>
      );
}

export default Header