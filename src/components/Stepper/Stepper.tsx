import * as React from 'react';
import cn from '@/libs/utils/cn';

export type StepperOrientation = 'horizontal' | 'vertical';
export type StepperStatus = 'completed' | 'active' | 'upcoming' | 'pending';

export interface StepperProps {
  orientation?: StepperOrientation;
  activeStep?: number;
  className?: string;
  children: React.ReactNode;
}

export function Stepper({
  orientation = 'horizontal',
  activeStep = 0,
  className,
  children,
}: StepperProps) {
  const isVertical = orientation === 'vertical';

  const items = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <div
      className={cn(
        'flex w-full',
        isVertical ? 'flex-col min-h-[100%]' : 'flex-row items-start justify-between',
        className
      )}
    >
      {items.map((child, index) => {
        const isLast = index === items.length - 1;

        let status: StepperStatus = 'upcoming';
        if (index < activeStep) status = 'completed';
        else if (index === activeStep) status = 'active';

        const childElement = child as React.ReactElement<any>;
        return React.cloneElement(childElement, {
          orientation,
          isLast,
          step: index + 1,
          status: childElement.props.status || status, // Allow individual override
          ...childElement.props,
        });
      })}
    </div>
  );
}

export interface StepperItemProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  status?: StepperStatus;
  orientation?: StepperOrientation; // Injected
  isLast?: boolean; // Injected
  step?: number; // Injected
  className?: string;
  children?: React.ReactNode;
}

export function StepperItem({
  title,
  description,
  icon,
  status = 'upcoming',
  orientation = 'horizontal',
  isLast = false,
  step = 1,
  className,
  children,
}: StepperItemProps) {
  const isVertical = orientation === 'vertical';
  const isCompleted = status === 'completed';
  const isActive = status === 'active';

  // Determine line colors
  const activeLineColor = 'bg-stone-900 dark:bg-stone-100';
  const inactiveLineColor = 'bg-stone-200 dark:bg-stone-800';

  const titleColor =
    isCompleted || isActive
      ? 'text-stone-900 dark:text-stone-100'
      : 'text-stone-500 dark:text-stone-400';

  const descriptionColor = 'text-stone-500 dark:text-stone-400';

  const bubbleBase =
    'flex items-center justify-center shrink-0 rounded-full font-medium transition-colors duration-300 w-10 h-10 border-2 z-10';

  let bubbleState = '';
  if (isCompleted) {
    bubbleState =
      'bg-stone-900 text-stone-50 border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100';
  } else if (isActive) {
    bubbleState =
      'bg-stone-50 text-stone-900 border-stone-900 ring-4 ring-stone-900/10 dark:bg-stone-900 dark:text-stone-100 dark:border-stone-100 dark:ring-stone-100/10';
  } else {
    bubbleState =
      'bg-stone-50 text-stone-500 border-stone-300 dark:bg-stone-900 dark:text-stone-500 dark:border-stone-700';
  }

  // Pre-configured Check Icon
  const CheckIcon = (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1.2em"
      width="1.2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div
      className={cn(
        'relative',
        isVertical ? 'flex flex-row' : 'flex flex-1 flex-col items-center',
        className
      )}
    >
      {/* Horizontal Layout Bubble & Line Wrapper */}
      {!isVertical && (
        <div className="w-full flex items-center justify-center relative">
          <div
            className={cn(
              'h-0.5 w-[50%] absolute left-0',
              step === 1
                ? 'bg-transparent'
                : isCompleted || isActive
                ? activeLineColor
                : inactiveLineColor
            )}
          />
          <div className={cn(bubbleBase, bubbleState, 'relative mx-2')}>
            {icon ? icon : isCompleted ? CheckIcon : step}
          </div>
          <div
            className={cn(
              'h-0.5 w-[50%] absolute right-0',
              isLast
                ? 'bg-transparent'
                : isCompleted
                ? activeLineColor
                : inactiveLineColor
            )}
          />
        </div>
      )}

      {/* Vertical Layout Bubble & Line Wrapper */}
      {isVertical && (
        <div className="flex flex-col items-center mr-4">
          <div className={cn(bubbleBase, bubbleState)}>
            {icon ? icon : isCompleted ? CheckIcon : step}
          </div>
          {!isLast && (
            <div
              className={cn(
                'w-0.5 mt-2 mb-2 flex-1 transition-colors duration-300 min-h-[1.5rem]',
                isCompleted ? activeLineColor : inactiveLineColor
              )}
            />
          )}
        </div>
      )}

      {/* Content Side */}
      <div
        className={cn(
          isVertical
            ? 'flex-1 pb-8 pt-1'
            : 'w-full mt-3 text-center flex flex-col items-center px-2'
        )}
      >
        <div className={cn('text-base font-semibold', titleColor)}>{title}</div>
        {description && (
          <div className={cn('text-sm mt-1', descriptionColor)}>{description}</div>
        )}
        {children && (
          <div className={cn('mt-3 w-full', !isVertical && 'flex justify-center')}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

Stepper.Item = StepperItem;
