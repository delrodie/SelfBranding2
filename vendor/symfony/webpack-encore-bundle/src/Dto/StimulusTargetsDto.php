<?php

declare(strict_types=1);

/*
 * This file is part of the Symfony WebpackEncoreBundle package.
 * (c) Fabien Potencier <fabien@symfony.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\WebpackEncoreBundle\Dto;

final class StimulusTargetsDto extends AbstractStimulusDto
{
    private $targets = [];

    /**
     * @param string|array $dataOrControllerName This can either be a map of controller names
     *                                           as keys set to their "targets". Or this can
     *                                           be a string controller name and targets are
     *                                           passed as the 2nd argument.
     * @param string|null  $targetNames          The space-separated list of target names if a string is passed to the 1st argument. Optional.
     *
     * @throws \Twig\Error\RuntimeError
     */
    public function addTarget($dataOrControllerName, string $targetNames = null): void
    {
        if (\is_string($dataOrControllerName)) {
            $data = [$dataOrControllerName => $targetNames];
        } else {
            trigger_deprecation('symfony/webpack-encore-bundle', 'v1.15.0', 'Passing an array as first argument of stimulus_target() is deprecated.');
            if ($targetNames) {
                throw new \InvalidArgumentException('You cannot pass a string to the second argument while passing an array to the first argument of stimulus_target(): check the documentation.');
            }

            $data = $dataOrControllerName;

            if (!$data) {
                return;
            }
        }

        foreach ($data as $controllerName => $targetNames) {
            $controllerName = $this->getFormattedControllerName($controllerName);

            $this->targets['data-'.$controllerName.'-target'] = $this->escapeAsHtmlAttr($targetNames);
        }
    }

    public function __toString(): string
    {
        if (0 === \count($this->targets)) {
            return '';
        }

        return implode(' ', array_map(static function (string $attribute, string $value): string {
            return $attribute.'="'.$value.'"';
        }, array_keys($this->targets), $this->targets));
    }

    public function toArray(): array
    {
        return $this->targets;
    }
}
