import React from 'react';
import { createRoot } from 'react-dom/client';
import { createComponent } from '@lit/react';
import { DemoCard as AxaCard } from './components/Card/Card';
import { DemoGreeting as DemoGreetingWC } from './demo-greeting';

// Creates a React component from a Lit component
const DemoCard = createComponent({
  react: React,
  tagName: 'demo-card',
  elementClass: AxaCard,
});
const DemoGreeting = createComponent({
  react: React,
  tagName: 'demo-greeting',
  elementClass: DemoGreetingWC,
});

const root = createRoot(document.getElementById('app')!);

root.render(
  <div>
    <DemoGreeting name="Test" />
    <DemoCard
      type="lg"
      image="https://picsum.photos/500/800"
      cardTitle="Car Insurance"
      content="AXA Car insurance is tailored to your needs. Get your car insurance quote. And if you've got more than one car registered at your home address, check out our MultiCar discount."
      subhead="Member online" />
  </div>);
