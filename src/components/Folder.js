import React, { useState } from 'react'

function Folder({ structure, level = 0 }) {
    const [expand, setExpand] = useState(false);
    if (structure.isFolder) {
        return (
            <div>
                <div style={{
                    cursor: "pointer",
                    paddingLeft: `${10 * level}px`
                }}
                    onClick={() => setExpand(expand => !expand)}>
                    {"->"} {structure.name}
                </div>
                <div
                    hidden={!expand}
                >
                    {
                        structure.child
                            .map((childStructure) => <Folder
                                key={childStructure.name}
                                structure={childStructure}
                                level={level + 1} />)

                    }
                </div>
            </div>
        )
    }
    return <div style={{ paddingLeft: `${10 * level}px` }} >{structure.name}</div>
}

export default Folder