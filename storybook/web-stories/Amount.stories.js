import React from 'react';

import Amount from '../Amount';

export default {
    title: 'Amount',
    component: Amount,
};

const common = {
    send: 5,
    receive: 1030,
    currency: "GYD"
};

const Template = () => {
    return <Amount
        {...common}
    />
};

export const Default = Template.bind({});

