import FamilyMemberPage from '../../components/WOMarriageAndStepChild'


const info = {
  
    familyMember: {
        name: 'David Cox  ',
        birthDate: '12/19/1980 '
    },
   
    children: [
        { name: 'Blake Cox', href: '/karen/david/blake'},
        { name: 'Cassie Cox', href: '/karen/david/cassie'},
        { name: 'Makayla Cox', href: '/karen/david/makayla'},
    ],
  
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

