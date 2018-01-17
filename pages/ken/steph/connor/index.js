import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Connor Rekdahl   ',
        birthDate: '1/30/2001 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

