import { LuCirclePlus } from "react-icons/lu";
import React from 'react'
import { Container,Body, ProfileCard, Title } from '../../routes/common/AllRoutes.jsx'
import SearchBox from './SearchBox.jsx';
import Box from './Box.jsx';
export const User1 = "https://cdn-icons-png.flaticon.com/128/6997/6997662.png";
export const User2 = "https://cdn-icons-png.flaticon.com/128/236/236832.png";
export const User3 = "https://cdn-icons-png.flaticon.com/128/236/236831.png";
export const User4 = "https://cdn-icons-png.flaticon.com/128/1154/1154448.png";

export const Hero = () => {
  return (
    <>
    <section className="hero bg-primary py-8">
      <Container className="flex items-center justify-between md:flex-row flex-col">
        <div className="w-full md:w-1/2 text-white pr-12">
          <Title level={3} className="text-white">
            Build, sell & collect digital items.
          </Title>
          <Body className="leading-7 text-gray-200 my-8">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima sit nihil mollitia dolorem eveniet ex similique facilis architecto molestias consequuntur perspiciatis unde, aliquam odit repudiandae! Error vitae libero repellendus.
          </Body>
          <SearchBox />
          <div className="flex items-center gap-8 my-8">
            <div>
              <Title level={4} className=" text-white">
                842M
              </Title>
              <Body className="leading-7 text-gray-200">Total Product</Body>
            </div>
            <div>
              <Title level={4} className=" text-white">
                842M
              </Title>
              <Body className="leading-7 text-gray-200">Total Auction</Body>
            </div>
            <div>
              <Title level={4} className=" text-white">
                54
              </Title>
              <Body className="leading-7 text-gray-200">Total Category</Body>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 my-16 relative py-16">
          <img src="../images/home/hero.webp" alt="" />
          <div className="horiz-move absolute md:top-28 top-8 left-0">
            <Box title="Proof of quality" desc="Lorem Ipsum Dolar Amet" />
          </div>
          <div className="horiz-move absolute bottom-72 right-0">
            <Box title="Safe and secure" desc="Lorem Ipsum Dolar Amet" />
          </div>

          <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl ml-5 -mt-5 vert-move w-1/2">
            <Title>58M Happy Client</Title>
            <div className="flex items-center">
              <ProfileCard className="border-2 border-white">
                <img src={User1} alt="User1" className="w-full h-full object-cover" />
              </ProfileCard>
              <ProfileCard className="border-2 border-white -ml-4">
                <img src={User2} alt="User1" className="w-full h-full object-cover" />
              </ProfileCard>
              <ProfileCard className="border-2 border-white -ml-4">
                <img src={User3} alt="User1" className="w-full h-full object-cover" />
              </ProfileCard>
              <ProfileCard className="border-2 border-white -ml-4">
                <img src={User4} alt="User1" className="w-full h-full object-cover" />
              </ProfileCard>

              <ProfileCard className="border-2 border-white -ml-4">
                <LuCirclePlus size={27} />
              </ProfileCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <div className="bg-white w-full py-16 -mt-10 rounded-t-[40px]"></div>
  </>
  )
}


