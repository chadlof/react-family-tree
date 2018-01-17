import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Blake Cox',
        birthDate: '12/10/2003 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

