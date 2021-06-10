const currencies = [  
  {
    id : 'PL',
    fullName : '🇵🇱 Polish Zloty', 
    exchangeTo : [
      { 
        id: 'GBP',
        fullName : '🇬🇧 British Pound', 
        rate : 0.18816 
      },
      {
        id: 'EUR',
        fullName : '🇪🇺 Euro',
        rate : 0.21758
      },
      {
        id: 'US',
        fullName : '🇺🇸 US Dollar', 
        rate : 0.26389 
      },
      {
        id: 'RUB',
        fullName : '🇷🇺 Russian Rouble', 
        rate : 19.7077 
      },
      {
        id: 'ESP',
        fullName : '🇪🇸 Spanish Peseta', 
        rate : 36.3210 
      }
    ]
  },
  {
    id : 'BGP',
    fullName : '🇬🇧 British Pound', 
    exchangeTo : [ 
      {
        id : 'PL',
        fullName : '🇵🇱 Polish Zloty', 
        rate : 5.21899
      },
      {
        id : 'EUR',
        fullName : '🇪🇺 Euro',
        rate : 1.14832
      },
      {
        id : 'US',
        fullName : '🇺🇸 US Dollar', 
        rate : 1.38992
      },
      {
        id : 'RUB',
        fullName : '🇷🇺 Russian Rouble', 
        rate : 103.800 
      },
      {
        id : 'ESP',
        fullName : '🇪🇸 Spanish Peseta', 
        rate : 191.300
      }
    ],
  },
  {
    id : 'EUR', 
    fullName : '🇪🇺 Euro',
    exchangeTo : [
      {
        short : 'PL',
        fullName : '🇵🇱 Polish Zloty', 
        rate : 4.56386
      },
      {
        short : 'GBP',
        fullName : '🇬🇧 British Pound', 
        rate : 0.86851 
      },
      {
        short : 'US',
        fullName : '🇺🇸 US Dollar', 
        rate : 1.20878
      },
      {
        short : 'RUB',
        fullName : '🇷🇺 Russian Rouble', 
        rate : 90.2726
      },
      {
        short : 'ESP',
        fullName : '🇪🇸 Spanish Peseta', 
        rate : 166.386
      }
    ],
  },
  {
    id : 'US',
    fullName : '🇺🇸 US Dollar', 
    exchangeTo : [
      {
        short : 'PL',
        fullName : '🇵🇱 Polish Zloty', 
        rate : 3.78578
      },
      {
        short : 'GBP',
        fullName : '🇬🇧 British Pound', 
        rate : 0.71937 
      },
      {
        short : 'EUR',
        fullName : '🇪🇺 Euro',
        rate : 0.82718
      },
      {
        short : 'RUB',
        fullName : '🇷🇺 Russian Rouble', 
        rate : 74.6808
      },
      {
        short : 'ESP',
        fullName : '🇪🇸 Spanish Peseta', 
        rate : 137.632
      }
    ],
  },
  {
    id : 'RUB',
    fullName : '🇷🇺 Russian Rouble', 
    exchangeTo :  [
      {
        short : 'PL',
        fullName : '🇵🇱 Polish Zloty', 
        rate : 0.05066
      },
      {
        short : 'GBP',
        fullName : '🇬🇧 British Pound', 
        rate : 0.00963 
      },
      {
        short : 'EUR',
        fullName : '🇪🇺 Euro',
        rate : 0.01107
      },
      {
        short : 'US',
        fullName : '🇺🇸 US Dollar', 
        rate : 0.01338
      },
      {
        short : 'ESP',
        fullName : '🇪🇸 Spanish Peseta', 
        rate : 1.84161
      }
    ],
  },
  {
    id : 'ESP',
    fullName : '🇪🇸 Spanish Peseta', 
    exchangeTo : [
      {
        short : 'PL',
        fullName : '🇵🇱 Polish Zloty', 
        rate : 0.02750
      },
      {
        short : 'GBP',
        fullName : '🇬🇧 British Pound', 
        rate : 0.00523 
      },
      {
        short : 'EUR',
        fullName : '🇪🇺 Euro',
        rate : 0.00601
      },
      {
        short : 'US',
        fullName : '🇺🇸 US Dollar', 
        rate : 0.00726
      },
      {
        short : 'RUB',
        fullName : '🇷🇺 Russian Rouble', 
        rate : 0.54255
      }
    ],
  }
];

export default currencies;