import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Elric Scott DuFault     ',
        birthDate: '2/22/2015  '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

