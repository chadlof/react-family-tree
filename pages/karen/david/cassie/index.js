import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Cassie Cox',
        birthDate: '6/27/2005 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

