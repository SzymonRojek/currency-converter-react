const currencies = [
  {
    id: 'ALL',
    name : '🇦🇱 Albanian Lek', 
    exchangeTo : [
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.00699
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna',
        rate : 0.20834
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar',
        rate : 0.01202
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.05976
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.00804
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.05272
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.00699
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint',
        rate : 2.90919
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira',
        rate : 15.5618
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 1.06
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 4.13327
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 90.3273
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.17166
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.08094
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.00373
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.03678
      },
      {
        id: 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 0.72561
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna',
        rate : 0.24212
      },
      {
        id: 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 0.72561
      },
      {
        id: 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.00972
      },
    ]
  },
  {
    id : 'GBP',
    name : '🇬🇧 British Pound',  
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 140.222 
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 29.8041 
      },
      {
        id: 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 1.71986 
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 1.62299
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 1.14832
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 1.43506
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 1.00000
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 416.168
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 2226.20
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 151.26
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 591.034
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 12916.3
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 24.5465
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 11.5740
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.53340
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 5.21899
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 103.800
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 34.6369
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 191.300
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 1.38992
      }
    ]
  },
  {
    id : 'CZK',
    name : '🇨🇿 Czech Koruna', 
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 4.70172
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.03353
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar',
        rate : 0.05767
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.28663
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.03855
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.25289
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.03353
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 13.9543
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira',
        rate : 74.6476
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 5.07
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 19.8583
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 433.978
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.82475
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.38888
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.01792
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.17644
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 3.48047
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 1.16143
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 6.41456
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.04660
      },
    ]
  },
  {
    id : 'CAD',
    name : '🇨🇦 Canadian Dollar',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 81.5189
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.58128
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 17.3268
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 4.96957
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.66839
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate: 4.38437
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.58128
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 241.941
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira',
        rate : 1294.19
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 87.93
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 347.896
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 7602.82
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 14.4486
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 6.81270
      },
      {
        id : 'OMR',
        name: '🇴🇲 Omani Rial',
        rate : 0.31397
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 3.05904
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 60.3448
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 20.1360
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 111.211
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.80804
      },
    ]
  },
  {
    id : 'DKK',
    name : '🇩🇰 Danish Krone',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 16.3997
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.11694
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna',
        rate : 3.48575
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar',
        rate : 0.20115
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.13447
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.88207
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.11694
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint',
        rate : 48.6731
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira',
        rate : 260.373
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 17.69
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 68.8423
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 1504.46
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 2.85912
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 1.34811
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.06213
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.61541
      },
      {
        id: 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 12.1400
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna',
        rate : 4.05108
      },
      {
        id: 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 22.3741
      },
      {
        id: 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.16256
      },
    ]
  },
  {
    id : 'EUR',
    name : '🇪🇺 Euro',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate :  121.948
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.86851
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 25.9207
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 1.49572
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 7.43527
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 6.55957
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.86958
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 361.979
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 1936.27
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 131.56
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 511.944
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 11187.9
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 21.2618
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 10.0255
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.46202
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 4.56386
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 90.2726
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 30.1260
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 166.386
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 1.20878
      }
    ]
  },
  {
    id : 'FRF',
    name : '🇫🇷 French Frank',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 18.5908
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.13257
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna',
        rate : 3.95158
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar',
        rate : 0.22802
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 1.13350
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.15245
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.13257
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint',
        rate : 55.1833
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira',
        rate : 295.182
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 20.06
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 78.0454
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 1705.58
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 3.24134
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 1.52838
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.07043
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.69765
      },
      {
        id: 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 13.7620
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna',
        rate : 4.59268
      },
      {
        id: 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 25.3654
      },
      {
        id: 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.18428
      }
    ]
  },
  {
    id : 'GIP',
    name : '🇬🇮 Gibraltar Pound',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 140.222
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 1.00000
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna',
        rate : 29.8041
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar',
        rate : 1.71986
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 8.54825
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 1.14974
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 7.54177
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint',
        rate : 416.168
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira',
        rate : 2226.20
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 151.26
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 591.034
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 12916.3
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 24.5465
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 11.5740
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.53340
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 5.26191
      },
      {
        id: 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 103.800
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna',
        rate : 34.6369
      },
      {
        id: 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 191.300
      },
      {
        id: 'US',
        name : '🇺🇸 US Dollar', 
        rate : 1.38992
      }
    ]
  },
  {
    id: 'HUF',
    name : '🇭🇺 Hungarian Forint', 
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 0.33657
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.00240
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna',
        rate : 0.07154
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar',
        rate : 0.00413
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.02052
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.00276
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.01810
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.00240
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira',
        rate : 5.34412
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 0.36
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 1.42721
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 31.1899
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.05927
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.02795
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.00129
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.01263
      },
      {
        id: 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 0.00598
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna',
        rate : 0.08315
      },
      {
        id: 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 0.45923
      },
      {
        id: 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.00334
      },
    ]
  },
  {
    id : 'ITL',
    name : '🇮🇹 Italian Lira', 
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 0.06298
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.00045
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 0.01339
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.00077
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.00384
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.00052
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.00339
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.00045
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 0.18695
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 0.07
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 0.26440
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 5.77806
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.01098
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.00518
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.00024
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.00236
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 0.04662
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 0.01556
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 0.08593
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.00062
      },
    ]
  },
  {
    id : 'JPY',
    name : '🇯🇵 Japanese Yen',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 0.92698
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.00661
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 0.19703
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.01137
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.05651
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.00760
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.04985
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.00661
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 2.75119
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 14.7159
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 3.89430
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 85.1049
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.16174
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.07626
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.00351
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.03479
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 0.68620
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 0.22896
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 1.26455
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar',
        rate : 0.00919
      }
    ]
  },
  {
    id : 'KZT',
    name : '🇰🇿 Kazakhstan Tenge',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 0.23764
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.00168
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 0.04997
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.00285
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.01442
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.00194
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.01272
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.00168
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 0.69518
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 3.75571
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 0.25
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 21.7032
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.04125
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.01945
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.00090
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.00887
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 0.17396
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 0.05843
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 0.32273
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar',
        rate : 0.00234
      }
    ]
  },
  {
    id : 'LAK',
    name : '🇱🇦 Lao Kip',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 0.01067
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.00008
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 0.00224
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.00013
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.00065
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.00009
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.00057
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.00008
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 0.03120
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 0.16855
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 0.01
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 0.04457
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.00185
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.00087
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.00004
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.00040
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 0.00781
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 0.00262
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 0.01448
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar',
        rate : 0.00010
      }
    ]
  },
  {
    id : 'MDL',
    name : '🇲🇩 Moldovan Leu',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 5.66997
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.04009
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 1.19234
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.06810
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.34412
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.04628
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.30357
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.04009
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 16.5867
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 89.6094
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 6.08
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 23.6952
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 517.828
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.46401
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.02138
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.21173
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 4.15052
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 1.39421
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 7.70025
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar',
        rate : 0.05572
      }
    ]
  },
  {
    id : 'NOK',
    name : '🇳🇴 Norwegian Kroner',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 12.2139
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.08635
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 2.56846
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.14670
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.74127
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.09970
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.65397
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.08635
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 35.7299
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 193.042
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 13.11
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 51.0425
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 1115.47
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 2.11987
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.04607
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.45609
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 8.94077
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 3.00349
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 16.5883
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar',
        rate : 0.12002
      }
    ]
  },
  {
    id : 'OMR',
    name : '🇴🇲 Omani Rial',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 263.642
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 1.86390
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 55.4414
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 3.16648
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 16.0007
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 2.15189
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 14.1155
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 1.86390
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 771.245
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 4166.65
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 282.88
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 1101.78
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 24077.9
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 45.7584
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 21.5756
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 9.84501
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 192.991
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 64.8280
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 358.045
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar',
        rate : 2.59071
      }
    ]
  },
  {
    id : 'PL',
    name : '🇵🇱 Polish Zloty', 
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 26.6228 
      },
      { 
        id : 'GBP',
        name : '🇬🇧 British Pound', 
        rate : 0.18816 
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 5.65865 
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.32654 
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 1.62299
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.21758
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 1.43191
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.18984
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 79.0143 
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 422.675 
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 28.72
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 111.819
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 2443.67
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 4.64403
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 2.18971
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.10092
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 19.7077 
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 6.57631 
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 36.3210 
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.26389 
      }
    ]
  },
  {
    id : 'RUB',
    name : '🇷🇺 Russian Rouble',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 1.34992
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.00963
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 0.28692
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.01656
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.08229
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.01107
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.07260
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.00963
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 4.00644
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 21.4312
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 1.46
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 5.70480
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 124.671
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.23693
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.11172
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.00515
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.05066
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 0.33344
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 1.84161
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.01338
      },
    ]
  },
  {
    id : 'SKK',
    name : '🇸🇰 Slovak Koruna', 
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 4.04793
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.02886
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna',
        rate : 0.86041
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar',
        rate : 0.04965
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.24681
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.03319
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate: 0.21774
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.02886
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 12.0155
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira',
        rate : 64.2724
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 4.37
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 16.9934
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 371.370
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.70576
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.33279
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.01534
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.15191
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 2.99650
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 5.52300
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.04012
      },
    ]
  },
  {
    id : 'ESP',
    name : '🇪🇸 Spanish Peseta',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate : 0.73292
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.00523
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 0.15579
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 0.00899
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 0.04469
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.00601
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 0.03942
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.00523
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 2.17554
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 11.6372
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 0.79
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 3.07685
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 67.2405
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 0.12779
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 0.06025
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.00278
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 0.02750
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble',
        rate : 0.54255
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate : 0.18106
      },
      {
        id : 'US',
        name : '🇺🇸 US Dollar', 
        rate : 0.00726
      },
    ]
  },
  {
    id : 'US',
    name : '🇺🇸 US Dollar',
    exchangeTo : [
      {
        id : 'ALL',
        name : '🇦🇱 Albanian Lek', 
        rate :  100.885
      },
      {
        id : 'GBP',
        name : '🇬🇧 British Pound',
        rate : 0.71937
      },
      {
        id : 'CZK',
        name : '🇨🇿 Czech Koruna', 
        rate : 21.4431
      },
      {
        id : 'CAD',
        name : '🇨🇦 Canadian Dollar', 
        rate : 1.23738
      },
      {
        id : 'DKK',
        name : '🇩🇰 Danish Krone',
        rate : 6.15019
      },
      {
        id : 'EUR',
        name : '🇪🇺 Euro',
        rate : 0.82718
      },
      {
        id : 'FRF',
        name : '🇫🇷 French Frank',
        rate : 5.42597
      },
      {
        id : 'GIP',
        name : '🇬🇮 Gibraltar Pound',
        rate : 0.71937
      },
      {
        id : 'HUF',
        name : '🇭🇺 Hungarian Forint', 
        rate : 299.419
      },
      {
        id : 'ITL',
        name : '🇮🇹 Italian Lira', 
        rate : 1601.65
      },
      {
        id : 'JPY',
        name : '🇯🇵 Japanese Yen',
        rate : 108.82
      },
      {
        id : 'KZT',
        name : '🇰🇿 Kazakhstan Tenge',
        rate : 425.279
      },
      {
        id : 'LAK',
        name : '🇱🇦 Lao Kip',
        rate : 9293.93
      },
      {
        id : 'MDL',
        name : '🇲🇩 Moldovan Leu',
        rate : 17.6625
      },
      {
        id : 'NOK',
        name : '🇳🇴 Norwegian Kroner',
        rate : 8.32806
      },
      {
        id : 'OMR',
        name : '🇴🇲 Omani Rial',
        rate : 0.38381
      },
      {
        id : 'PL',
        name : '🇵🇱 Polish Zloty',
        rate : 3.78578
      },
      {
        id : 'RUB',
        name : '🇷🇺 Russian Rouble', 
        rate : 74.6808
      },
      {
        id : 'SKK',
        name : '🇸🇰 Slovak Koruna', 
        rate :  24.9197
      },
      {
        id : 'ESP',
        name : '🇪🇸 Spanish Peseta', 
        rate : 137.632
      },
    ]
  },
]; 

export default currencies;