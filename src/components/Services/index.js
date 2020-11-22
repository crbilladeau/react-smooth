import React from 'react';
import {ServicesContainer, ServicesWrapper, ServicesCard} from './ServiceStyles';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <h1>Our Services</h1>
      <ServicesWrapper>

        <ServicesCard>
          <img src={Icon1} alt="Piggy bank" />
          <h2>Reduce expenses</h2>
          <p>We help reduce your fees and increase your overall revenue.</p>
        </ServicesCard>

        <ServicesCard>
          <img src={Icon2} alt="Car" />
          <h2>Virtual Offices</h2>
          <p>You can access our platform online, anywhere in the world.</p>
        </ServicesCard>

        <ServicesCard>
          <img src={Icon3} alt="Phone" />
          <h2>Premium Benefits</h2>
          <p>Unlock our special membership card that returns 5% cash back.</p>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
