import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Reed R Lofgren       ',
        birthDate: '1/18/2014'
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

