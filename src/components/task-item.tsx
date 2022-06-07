import {
  Box,
  HStack,
  useColorModeValue,
  useToken,
  Icon,
  Input
} from 'native-base'
import React, { useCallback, VFC } from 'react'
import {
  NativeSyntheticEvent,
  Pressable,
  TextInputChangeEventData
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
import { AnimatedTaskLabel } from './animated-task-label'
import { AnimatedCheckbox } from './animated-checkbox'
import { SwipeView } from './swipable-view'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isEditing: boolean
  isDone: boolean
  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  onChangeSubject?: (subject: string) => void
  onFinishEditing?: () => void
  subject: string
}

export const TaskItem: VFC<Props> = function ({
  isDone,
  onToggleCheckbox,
  subject,
  onPressLabel,
  onRemove,
  isEditing,
  onChangeSubject,
  onFinishEditing,
  simultaneousHandlers
}) {
  const highlightColor = useToken(
    'colors',
    useColorModeValue('blue.500', 'blue.400')
  )

  const boxStroke = useToken(
    'colors',
    useColorModeValue('muted.300', 'muted.500')
  )

  const checkmarkColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText')
  )

  const activeTextColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText')
  )

  const doneTextColor = useToken(
    'colors',
    useColorModeValue('muted.400', 'muted.600')
  )

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text)
    },
    [onChangeSubject]
  )

  return (
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          bg="red.500"
          alignItems="flex-end"
          justifyContent="center"
          pr={4}
        >
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack
        alignContent={'center'}
        width="full"
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <Box width={30} height={30} marginRight={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox
              highlightColor={highlightColor}
              checked={isDone}
              boxOutlineColor={boxStroke}
              checkmarkColor={checkmarkColor}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            w="full"
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikeThrough={isDone}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipeView>
  )
}
