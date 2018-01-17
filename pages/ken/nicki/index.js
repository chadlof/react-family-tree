import FamilyMemberPage from '../../components/WOStepChild'


const info = {
    marriageDate: '8/15/2014',
    familyMember: {
        name: 'Nicole M "Lofgren" Smasal ',
        birthDate: '10/9/1977'
    },
    spouse: {
        name: 'Thomas W Smasal  ',
        birthDate: '7/7/1984'
    },
    children: [
        { name: 'Wyatt J Smasal  ', href: '/ken/nicki/wyatt'}
    ],
 
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

