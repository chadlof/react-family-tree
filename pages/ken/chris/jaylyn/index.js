import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Jaylyn H Lofgren  ',
        birthDate: '4/25/2004 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

