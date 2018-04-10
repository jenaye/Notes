<?php

namespace App\Swagger;

use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

final class SwaggerDecorator implements NormalizerInterface
{
    private $decorated;

    public function __construct(NormalizerInterface $decorated)
    {
        $this->decorated = $decorated;
    }

    public function normalize($object, $format = null, array $context = [])
    {
        $docs = $this->decorated->normalize($object, $format, $context);

        $UsernameDefinition = [
            'name' => 'username',
            'description' => 'your login',
            'in' => 'string',
        ];
        $PasswordDefinition = [
            'name' => 'password',
            'description' => 'your password',
            'in' => 'string',
        ];

        $docs['paths']['/login_check']['post']['parameters'][] = $UsernameDefinition;
        $docs['paths']['/login_check']['post']['parameters'][] = $PasswordDefinition;

        $docs['info']['title'] = 'Note API';
        $docs['info']['version'] = '1.2';
        $docs['basePath'] = '/api';


        return $docs;
    }

    public function supportsNormalization($data, $format = null)
    {
        return $this->decorated->supportsNormalization($data, $format);
    }
}
