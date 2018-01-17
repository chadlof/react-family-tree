import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Kennadee Elain Lofgren',
        birthDate: 'October 31, 2013'
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}