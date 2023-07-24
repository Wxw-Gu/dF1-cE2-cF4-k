import { Button, Input } from 'antd'
import { useState } from 'react'
import _ from 'lodash-es'
import md5 from 'js-md5'

export const Home: React.FC = () => {
  const [mySearchUser] = useState<UserType>({} as UserType)
  const [gravatarName, setGravatarName] = useState<string>('')
  const [gravatarUrl, setGravatarUrl] = useState<string>(`https://www.gravatar.com/avatar/${md5('xinwei.wang@datatist.com')}`)
  const defaultEmail = 'so@sohu.com'

  return (
    <div>
      <div w-500px my-flex-ja >
        <Input
          style={{ width: 200 }}
          value={gravatarName}
          onChange={e => setGravatarName(e.target.value)}
          placeholder='Search for avatars'
        />
        <Button
          onClick={() => setGravatarUrl(`https://www.gravatar.com/avatar/${md5(gravatarName)}`)}
        >
          Search for avatars
        </Button>
        <img src={gravatarUrl} alt="" />
      </div>
      <div flex mt-5>
        <div>
          {/* @unocss-skip-start */}
          <img ml-10 w-100px h-100px
            src={!_.isEmpty(mySearchUser)
              ? mySearchUser.avatar
              : `https://www.gravatar.com/avatar/${md5(!_.isEmpty(defaultEmail)
                ? defaultEmail
                : 'abc@sohu.com')}?d=robohash`}
            alt=""
          />
          {/* @unocss-skip-end */}
        </div>
      </div>
    </div >
  )
}
