import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Makayla Cox',
        birthDate: '7/25/2007 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

