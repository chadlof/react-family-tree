import FamilyMemberPage from '../components/WOStepChild'


const info = {
    marriageDate: 'August 5, 1980 ',
    familyMember: {
        name: 'Kathryn Renee "Lofgren" Gruber ',
        birthDate: '12/3/1961'
    },
    spouse: {
        name: 'Gary Lee Gruber    ',
        birthDate: '5/22/1963   '
    },
    children: [
        { name: 'Debbie Renee Calixto (Gruber) ', href: '/kathy/debbie'},
        { name: 'Katie Ann Chock (Gruber) ', href:'/kathy/katie' },
        { name: 'Mindy Marie DuFault (Gruber) ', href:'/kathy/mindy' }
    ],

}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

