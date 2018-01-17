import FamilyMemberPage from '../components/WOMarriageAndStepChild'


const info = {
    marriageDate: null,
    familyMember: {
        name: 'Veron Alan Lofgren',
        birthDate: 'TBD '
    },
    spouse: {
        name: null
    },
    children: [
        { name: 'Chad Alan Lofgren', href: 'vern/chad'}
    ],
    stepChildren: [
        { name: null}
    ]
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

