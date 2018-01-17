import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Landen Leo Lofgren',
        birthDate: '12/15/2013 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

