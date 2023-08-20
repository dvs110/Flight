const airportData1 = [
    {
        label: 'Arrival Airport',
        value: 'airport',
        // disabled:true
    },
    {
        label: 'Abadan(Iran)',
        value: 'ABD',
    },
    {
        label: 'Aarhus(Denmark)',
        value: 'AAR',
    },
    {
        label: 'Abeche(Chad)',
        value: 'AEH',
    },
    {
        label: 'Aberdeen(United Kingdom)',
        value: 'ABZ',
    },
    {
        label: 'Abu Dhabi(UAE)',
        value: 'AUH',
    },
    {
        label: 'Adana(Turkey)',
        value: 'ADA',
    },
    {
        label: 'Adelaide(Australia)',
        value: 'ADL',
    },
    {
        label: 'Adiyaman(Turkey)',
        value: 'ADF',
    },
    {
        label: 'Chandigarh(India)',
        value: 'IXC',
    },
    {
        label: 'Chiang Mai(Thailand)',
        value: 'CNX',
    },
    {
        label: 'Chicago(USA)',
        value: 'ORD',
    },
    {
        label: 'Christchurch(New Zealand)',
        value: 'CHC',
    },

    {
        label: 'Agadir(Morocco)',
        value: 'AGA',
    },
    {
        label: 'Cairo(Egypt)',
        value: 'CAI',
    },
    {
        label: 'Delhi(India)',
        value: 'DEL',
    },
    {
        label: 'Dhaka(Bangladesh)',
        value: 'DAC',
    },
    {
        label: 'Cuiaba(Brazil)',
        value: 'CGB',
    },
    {
        label: 'Doncaster/Sheffield(UK)',
        value: 'DSA',
    },
    {
        label: 'Dubai(UAE)',
        value: 'DXB',
    },
    {
        label: 'Conakry(Guinea)',
        value: 'CKY',
    },
    {
        label: 'Denver(USA)',
        value: 'DEN',
    },
    {
        label: 'Dalian(China)',
        value: 'DLC',
    },
    {
        label: 'Fukuoka(Japan)',
        value: 'FUK',
    },
    {
        label: 'Funchal(Portugal)',
        value: 'FNC',
    },
    {
        label: 'Gaborone(Botswana)',
        value: 'GBE',
    },
    {
        label: 'Gaza City(Palestinian)',
        value: 'GJA',
    },
    {
        label: 'Gdansk(Poland)',
        value: 'GND',
    },
    {
        label: 'Geneva(Switzerland)',
        value: 'GVA',
    },
    {
        label: 'Groningen(Netherlands)',
        value: 'GRQ',
    },
    {
        label: 'Freeport(Bahamas)',
        value: 'FPO',
    },
    {
        label: 'Hamilton(New Zealand)',
        value: 'HLZ',
    },
    {
        label: 'Hanoi(Vietnam)',
        value: 'HAN',
    },
    {
        label: 'Harare(Zimbabwe)',
        value: 'HRE',
    },
    {
        label: 'Havana(Cuba)',
        value: 'HAV',
    },
    {
        label: 'Hiroshima International(Japan)',
        value: 'HIJ',
    },
    {
        label: 'Hong Kong(Hong Kong)',
        value: 'HKG',
    },
    {
        label: 'Honiara(Solomon Islands)',
        value: 'HIR',
    },
    {
        label: 'Horta(Portugal)',
        value: 'HOR',
    },
    {
        label: 'Hurghada International(	Egypt)',
        value: 'HRG',
    },
    {
        label: 'Incheon(Korea South)',
        value: 'INC',
    },
    {
        label: 'Istanbul(Turkey)',
        value: 'IST',
    },
    {
        label: 'Jaffna(Sri Lanka)',
        value: 'JAF',
    },
    {
        label: 'Jakarta(Indonesia)',
        value: 'CGK',
    },
    {
        label: 'Jalandhar(India)',
        value: 'JLR',
    },
    {
        label: 'Janakpur(Nepal)',
        value: 'JKR',
    },
    {
        label: 'Jerez de la Frontera(Spain)',
        value: 'XRY',
    },
    {
        label: 'Jönköping(Sweden)',
        value: 'JKG',
    },
    {
        label: 'Johannesburg(South Africa)',
        value: 'JNB',
    },
    {
        label: 'Johor Bahru(Malaysia)',
        value: 'JHB',
    },
    {
        label: 'Jouf(Saudi Arabia)',
        value: 'AJF',
    },
    {
        label: 'Kiev(Ukriane)',
        value: 'KBP',
    },
    {
        label: 'Casa de Campo(Dominican Republic)',
        value: 'LRM',
    },
    {
        label: 'Cartagena(Colombia)',
        value: 'CTG',
    },
    {
        label: 'Kingston(Jamaica)',
        value: 'KIN',
    },
    {
        label: 'Kirkuk(Iraq)',
        value: 'KIK',
    },
    {
        label: 'Krakow(Poland)',
        value: 'KRK',
    },
    {
        label: 'Dublin(Ireland)',
        value: 'DUB',
    },
    {
        label: 'Mumbai(India)',
        value: 'BOM',
    },
    {
        label: 'Entebbe(Uganda)',
        value: 'EBB',
    },
    {
        label: 'Elat(Israel)',
        value: 'ETH',
    },
    {
        label: 'Jose De San Martin(Argentina)',
        value: 'JSM',
    },
    {
        label: 'Kabul(Afghanistan)',
        value: 'KBL',
    },
    {
        label: 'Kaohsiung International(Taiwan)',
        value: 'KHH',
    },
    {
        label: 'Kazan(Russia)',
        value: 'KZN',
    },
    {
        label: 'Kuala Lumpur(Malaysia)',
        value: 'KUL',
    },
    {
        label: 'Kuwait(Kuwait)',
        value: 'KWI',
    },
    {
        label: 'La Coruna(Spain)',
        value: 'LCG',
    },
    {
        label: 'Lagos(Nigeria)',
        value: 'LOS',
    },
    {
        label: 'Kathmandu(Nepal)',
        value: 'KTM',
    },
    {
        label: 'Kharkov(Ukraine)',
        value: 'HRK',
    },
    {
        label: 'Lelystad(Netherlands)',
        value: 'LEY',
    },
    {
        label: 'Lima(Peru)',
        value: 'LIM',
    },
    {
        label: 'Limassol(Cyprus)',
        value: 'QLI',
    },
    {
        label: 'Madras(India)',
        value: 'MAA',
    },
    {
        label: 'Manila(Philippines)',
        value: 'MNL',
    },
    {
        label: 'Manzini(Swaziland)',
        value: 'MTS',
    },
    {
        label: 'Duesseldorf(Germany)',
        value: 'DUS',
    }
]

export default airportData1