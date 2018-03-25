<?php
/**
 * Created by PhpStorm.
 * User: Houziaux mike : jenaye
 * Email : mike@les-tilleuls.coop
 * Date: 24/03/18
 * Time: 14:21
 */
namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Note
 * @ApiResource(attributes={"normalization_context"={"groups"={"Note"}}})
 * @ORM\Table(name="note")
 * @ORM\Entity(repositoryClass="App\Repository\NoteRepository")
 */
class Note
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"Note"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"Note"})
     */
    public $created_at;

    /**
     * @ORM\Column(type="text")
     * @Groups({"Note"})
     */
    public $content;

    /**
     * @ORM\ManyToMany(targetEntity="Tag", inversedBy="notes")
     * @Groups({"Note"})
     */
    private $tags;

    public function __construct()
    {
        $this->tags = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add tag
     *
     * @param \App\Entity\Tag $tag
     *
     * @return Note
     */
    public function addTag(\App\Entity\Tag $tag)
    {
        $this->tags[] = $tag;
        return $this;
    }

    /**
     * Remove Tag
     * @param \App\Entity\Tag $tags
     */
    public function removeTag(\App\Entity\Tag $tag)
    {
        $this->tags->removeElement($tag);
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }
}