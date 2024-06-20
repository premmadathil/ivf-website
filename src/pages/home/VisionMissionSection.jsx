import React from 'react'
import IVFCard from '../../components/card'
import binoImg from '../../assets/images/bino.png'
import missionImg from '../../assets/images/mission.png'
import qualityImg from '../../assets/images/quality.png'

const VisionMissionSection = () => {
  const cardData = [
    {
      id: '1',
      image: binoImg,
      heading: 'Our Vison',
      content:
        'Center of Excellence in Fertility(Turning couple into happy Family),Gynaecology (Well Women & Cosmetic) , Obstetrics (Pain free Labour, Hysteroscopy, Laparoscopy) and allied specialties aiming to provide comprehensive & Comfortable Healthcare Services.',
    },
    {
      id: '2',
      image: missionImg,
      heading: 'Our Mission',
      content:
        'To provide State- of- the- art facilities of International Standards to patients in a pleasant comfortable ambience',
    },
    {
      id: '3',
      image: qualityImg,
      heading: 'Quality Policy',
      content: 'High Quality Care with Love, and Smile.',
    },
  ]
  return (
    <section className='vision-mission gap position-relative'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-7 position-relative top-layer'>
            {cardData.map((item, index) => {
              const { image, heading, content, id } = item
              return (
                <IVFCard
                  key={id}
                  index={index}
                  image={image}
                  heading={heading}
                  content={content}
                  isHome={true}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection
