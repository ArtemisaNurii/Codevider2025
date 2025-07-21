'use client';

import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@/components/TeamPage/ProgressCarousel';
import zyra9 from '../../assets/officeImages/zyra9.jpg';
import zyra7 from '../../assets/officeImages/zyra6.jpg';
import zyra11 from '../../assets/officeImages/zyra11.jpg';
import zyra12 from '../../assets/officeImages/zyra12.jpg';

const items = [
  {
    img: zyra9,
    title: 'Collaborative Spirit',
    desc: 'Where innovation meets teamwork. Our open culture encourages cross-functional collaboration and knowledge sharing.',
    sliderName: 'collaboration',
  },
  {
    img: zyra7,
    title: 'Leadership Excellence',
    desc: 'Empowering leaders who inspire growth, drive innovation, and champion our core values of integrity and excellence.',
    sliderName: 'leadership',
  },
  {
    img: zyra11,
    title: 'Work-Life Balance',
    desc: 'Fostering a culture that values personal well-being, creativity, and meaningful connections beyond the workplace.',
    sliderName: 'balance',
  },
  {
    img: zyra12,
    title: 'Innovation Hub',
    desc: 'Where bold ideas come to life. Our culture celebrates experimentation, learning from failure, and breakthrough thinking.',
    sliderName: 'innovation',
  },
];

export default function Carousel() {
  return (
         <ProgressSlider vertical={false} activeSlider="collaboration">
      <SliderContent>
        {items.map((item, index) => (
          <SliderWrapper key={index} value={item.sliderName}>
            <img
              className="rounded-xl 2xl:h-[500px] h-[350px] object-cover"
              src={item.img}
              width={1900}
              height={1080}
              alt={item.desc}
            />
          </SliderWrapper>
        ))}
      </SliderContent>

      <SliderBtnGroup className="absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-md">
        {items.map((item, index) => (
          <SliderBtn
            key={index}
            value={item.sliderName}
            className="text-left p-3 border-r"
            progressBarClass="dark:bg-black bg-white h-full"
          >
            <h2 className="relative px-4 rounded-full w-fit dark:bg-white dark:text-black text-white bg-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="text-sm font-medium line-clamp-2">{item.desc}</p>
          </SliderBtn>
        ))}
      </SliderBtnGroup>
    </ProgressSlider>
  );
}
