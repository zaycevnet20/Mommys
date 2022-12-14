import React from 'react'
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const InternetIcon = (props: SvgProps) => {
  const { purple, white } = useTheme()

  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#a)">
        <Path
          d="M10.1.333c-4.933.7-9.067 4.9-9.733 9.834-.534 4 .7 7.566 3.6 10.266C6.6 22.9 8.2 23.5 12 23.5c3.833 0 5.567-.733 8.167-3.333 2.6-2.6 3.333-4.334 3.333-8.167 0-2.567-.133-3.467-.733-4.733-.934-2.067-3.534-4.8-5.434-5.767C15.967.8 15.1.567 12.5.2c-.367-.067-1.433 0-2.4.133ZM11 6.5V11H6.7l.167-1.1c.633-3.8 1.733-6.333 3.2-7.4.433-.267.8-.5.833-.5.067 0 .1 2.033.1 4.5Zm2.667-4.167C15.033 3.067 17 7.6 17 10.067c0 .933-.033.933-2.167.933h-2.166V6.5c0-2.467.1-4.5.2-4.5s.466.167.8.333Zm-6.334.934c0 .133-.233.566-.5.966-.6.867-1.5 4.2-1.5 5.667V11h-3.6l.334-1.433C2.5 7.633 3.733 5.6 5.4 4.2c1.367-1.167 1.933-1.467 1.933-.933Zm12.334 2.066c1.2 1.567 1.9 2.934 2.166 4.434L22.067 11h-3.334l-.2-1.767c-.2-1.533-.866-3.766-1.7-5.7-.266-.633-.266-.633.8 0 .6.334 1.5 1.167 2.034 1.8ZM5.4 14.767c.133 1.033.633 2.833 1.067 3.966.466 1.134.8 2.1.733 2.167-.033.033-.7-.367-1.433-.9C3.7 18.467 2 15.5 2 13.433c0-.733.1-.8 1.6-.7l1.567.1.233 1.934Zm5.6 2.566c0 4.6 0 4.667-.667 4.334-1.433-.767-3-4.167-3.466-7.6l-.2-1.4H11v4.666Zm6-3.533c0 1.833-1.267 5.467-2.367 6.7-1.766 2-1.966 1.7-1.966-3.1 0-2.367.1-4.4.233-4.5.1-.133 1.1-.233 2.167-.233H17V13.8Zm5-.533c0 1.7-1.2 3.966-3.067 5.866C17.867 20.2 16.9 21 16.8 20.9c-.1-.1.2-1.167.667-2.333.466-1.167.933-3 1.066-4.034l.234-1.866h1.6c1.366 0 1.633.1 1.633.6Z"
          fill={purple}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={white} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
