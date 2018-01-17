import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Aria Kathryn Chock     ',
        birthDate: '12/12/2013  '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

