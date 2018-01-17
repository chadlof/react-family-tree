import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Calan Joseph Lofgren',
        birthDate: 'October 12, 2017'
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

