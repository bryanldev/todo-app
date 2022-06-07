import React, { useCallback, useState, VFC } from 'react'
import { Center, VStack, useColorModeValue, Fab, Icon } from 'native-base'
import { v4 as uuidv4 } from 'uuid'
import { AntDesign } from '@expo/vector-icons'
import {
  AnimatedColorBox,
  Masthead,
  NavBar,
  TaskItemData,
  TaskList
} from '@/components'
import MastheadImage from '@/assets/masthead.png'

const initialData = [
  {
    id: uuidv4(),
    subject: 'Buy movie tickets for Friday',
    done: false
  },
  {
    id: uuidv4(),
    subject: 'Make a React Native tutorial',
    done: false
  }
]

export const MainScreen: VFC = function () {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback((item: TaskItemData): void => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)

      newData[index] = {
        ...item,
        done: !item.done
      }

      return newData
    })
  }, [])

  const handleChangeTaskItemSubject = useCallback(
    (item: TaskItemData, newSubject: string) => {
      setData(prevData => {
        const newData = [...prevData]
        const index = prevData.indexOf(item)

        newData[index] = {
          ...item,
          subject: newSubject
        }
        return newData
      })
    },
    []
  )

  const handleFinishEditingTaskItem = useCallback(
    (_item: TaskItemData): void => {
      setEditingItemId(null)
    },
    []
  )

  const handlePressTaskItemLabel = useCallback((item: TaskItemData): void => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = useCallback((item: TaskItemData): void => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full"
    >
      <Masthead title="What's up, Bryan!" image={MastheadImage}>
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>

      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = uuidv4()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedColorBox>
  )
}
