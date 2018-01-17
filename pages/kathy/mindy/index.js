import FamilyMemberPage from '../../components/WOStepChild'


const info = {
    marriageDate: 'December 4, 2010 ',
    familyMember: {
        name: 'Mindy Marie DuFault (Gruber)  ',
        birthDate: '1/8/1986'
    },
    spouse: {
        name: 'Peter Boyd DuFault  ',
        birthDate: '10/5/1985'
    },
    children: [
        { name: 'Isaac Gregory DuFault     ', href: '/kathy/mindy/isaac'},
        { name: 'Elric Scott DuFault ', href: '/kathy/mindy/elric'}
    ],

}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

