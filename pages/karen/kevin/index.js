import FamilyMemberPage from '../../components/WOStepChild'


const info = {
    marriageDate: '9/25/2010',
    familyMember: {
        name: 'Kevin Alan Lofgren ',
        birthDate: '1/29/1977'
    },
    spouse: {
        name: 'Tammy Olsen ',
        birthDate: '9/30/1981'
    },
    children: [
        { name: 'Maci Lynn', href: '/karen/kevin/maci'},
        { name: 'Landen Leo  ', href:'/karen/kevin/landen' }
    ],
  
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

